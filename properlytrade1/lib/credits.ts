const STORAGE_KEY = "pt_credits";
const FREE_CREDITS_PER_DAY = 10;
const MAX_FREE_CREDITS = 100;
const BYOK_MULTIPLIER = 3.141592653589793238462643383279502884197169; // Pi
const BYOK_MULTIPLIER_FULL = "3.141592653589793238462643383279502884197169";

export interface CreditState {
  balance: number;
  lastRefillDate: string; // ISO date string (YYYY-MM-DD)
  totalDaysAccumulated: number;
  hasOwnApiKey: boolean;
  overageCreditsUsed: number;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

function getDefaultState(): CreditState {
  return {
    balance: FREE_CREDITS_PER_DAY,
    lastRefillDate: getToday(),
    totalDaysAccumulated: 1,
    hasOwnApiKey: false,
    overageCreditsUsed: 0,
  };
}

export function loadCredits(): CreditState {
  if (typeof window === "undefined") return getDefaultState();

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const state = getDefaultState();
      saveCredits(state);
      return state;
    }

    const state: CreditState = JSON.parse(stored);

    // Validate state shape to prevent corruption
    if (
      typeof state.balance !== "number" ||
      typeof state.lastRefillDate !== "string" ||
      typeof state.totalDaysAccumulated !== "number" ||
      typeof state.hasOwnApiKey !== "boolean" ||
      typeof state.overageCreditsUsed !== "number" ||
      state.balance < 0 ||
      isNaN(state.balance)
    ) {
      console.warn("Corrupted credit state detected, resetting.");
      const freshState = getDefaultState();
      saveCredits(freshState);
      return freshState;
    }

    return refillIfNewDay(state);
  } catch {
    console.warn("Failed to load credits from storage, using defaults.");
    const state = getDefaultState();
    saveCredits(state);
    return state;
  }
}

export function saveCredits(state: CreditState): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    console.warn("Failed to save credits to localStorage.");
  }
}

function refillIfNewDay(state: CreditState): CreditState {
  const today = getToday();
  if (state.lastRefillDate === today) return state;

  const dailyCredits = state.hasOwnApiKey
    ? FREE_CREDITS_PER_DAY * BYOK_MULTIPLIER
    : FREE_CREDITS_PER_DAY;

  const maxCredits = state.hasOwnApiKey
    ? MAX_FREE_CREDITS * BYOK_MULTIPLIER
    : MAX_FREE_CREDITS;

  const newDaysAccumulated = Math.min(
    state.totalDaysAccumulated + 1,
    state.hasOwnApiKey ? 10 : 10
  );

  const newBalance = Math.min(state.balance + dailyCredits, maxCredits);

  const updated: CreditState = {
    ...state,
    balance: newBalance,
    lastRefillDate: today,
    totalDaysAccumulated: newDaysAccumulated,
    overageCreditsUsed: 0, // reset daily overage tracking
  };

  saveCredits(updated);
  return updated;
}

export function useCredit(state: CreditState): {
  newState: CreditState;
  allowed: boolean;
  isOverage: boolean;
} {
  if (state.balance > 0) {
    const newState = { ...state, balance: state.balance - 1 };
    saveCredits(newState);
    return { newState, allowed: true, isOverage: false };
  }

  // Overage - allow but track it
  const newState = {
    ...state,
    balance: 0,
    overageCreditsUsed: state.overageCreditsUsed + 1,
  };
  saveCredits(newState);
  return { newState, allowed: true, isOverage: true };
}

export function setOwnApiKey(
  state: CreditState,
  hasKey: boolean
): CreditState {
  const dailyCredits = hasKey
    ? FREE_CREDITS_PER_DAY * BYOK_MULTIPLIER
    : FREE_CREDITS_PER_DAY;

  const updated: CreditState = {
    ...state,
    hasOwnApiKey: hasKey,
    balance: hasKey && !state.hasOwnApiKey
      ? state.balance + (dailyCredits - FREE_CREDITS_PER_DAY)
      : state.balance,
  };

  saveCredits(updated);
  return updated;
}

export function getOverageCost(overageCredits: number): number {
  // $0.05 per overage credit
  return overageCredits * 0.05;
}

export const CREDIT_CONSTANTS = {
  FREE_CREDITS_PER_DAY,
  MAX_FREE_CREDITS,
  BYOK_MULTIPLIER,
  BYOK_MULTIPLIER_FULL,
  BYOK_DAILY_CREDITS_FULL: "31.41592653589793238462643383279502884197169",
  OVERAGE_COST_PER_CREDIT: 0.05,
};

export function getByokDailyCreditsDisplay(): { integer: number; full: string; formula: string } {
  const exact = FREE_CREDITS_PER_DAY * BYOK_MULTIPLIER;
  return {
    integer: Math.floor(exact),
    full: exact.toString(),
    formula: `\u03C0 \u00D7 ${FREE_CREDITS_PER_DAY}`,
  };
}

export function getByokMaxCreditsDisplay(): { integer: number; full: string } {
  const exact = MAX_FREE_CREDITS * BYOK_MULTIPLIER;
  return {
    integer: Math.floor(exact),
    full: exact.toString(),
  };
}
