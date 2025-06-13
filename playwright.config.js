export default {
  reporter: [
    ["list"],
    ["./reporter.js", {
      outputFile: "playwright-report.json",
    }],
  ],
  outputDir: "./.test-results",
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3003",
    reuseExistingServer: !process.env.CI,
    stdout: "ignore",
    stderr: "pipe",
  },
  expect: {
    timeout: 10000,
  },
  retries: 0,
  timeout: 10000,
};
