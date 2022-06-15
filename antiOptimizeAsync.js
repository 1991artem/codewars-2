async function antiOptimizeAsync(task) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return task() }

