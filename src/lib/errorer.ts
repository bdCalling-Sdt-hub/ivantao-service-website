export default async function errorer(
  error: Error | string,
  level: "error" | "warn" | "info" = "error",
  context?: string,
  additionals?: boolean
) {
  const timestamp = new Date().toLocaleString();
  const errorMessage = typeof error === "string" ? error : error.message;
  const stackTrace = error instanceof Error ? error.stack : null;

  const logStyles = {
    error: "color: red; font-weight: bold;",
    warn: "color: orange; font-weight: bold;",
    info: "color: blue; font-weight: bold;",
  };

  if (typeof window !== "undefined") {
    // Browser (Styled Console Logs)
    console.log(
      `%c${additionals ? `[${timestamp}] [${level.toUpperCase()}]` : ""}${
        context ? ` [${context}]` : ""
      } ${errorMessage}`,
      logStyles[level]
    );
    if (stackTrace) console.error(stackTrace);
  } else {
    // Node.js (Uses Chalk for colors)
    const chalk = (await import("chalk")).default;
    const colors = { error: chalk.red, warn: chalk.yellow, info: chalk.blue };
    console.log(
      colors[level](
        `[${timestamp}] [${level.toUpperCase()}]${
          context ? ` [${context}]` : ""
        } ${errorMessage}`
      )
    );
    if (stackTrace) console.error(stackTrace);
  }
}
