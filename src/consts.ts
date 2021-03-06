export const CODE = /`{3}(ts|js)\r?\n([\s\S]*)`{3}/i;
export const HELP = /^\?h[ea]lp$/i;
export const EVAL = /^\?eval/i;
export const DESTRUCT = /^\?SELFDESTRUCT/i;
export const OWNER = "230054162719571979";

export const THIRTY_SECS = 30 * 1_000;
export const ONE_MIN = THIRTY_SECS * 2;
export const FIVE_MINS = ONE_MIN * 5;

export const messageOptions = { code: "ts" };
export const bashOptions = { timeout: 5000, shell: "/bin/bash" };
