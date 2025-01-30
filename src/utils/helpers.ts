const filterBySearchTerm = (searchTerm: string, data: any[]) => {
  if (!searchTerm) return data;
  const term = searchTerm.toLowerCase();

  return data.filter((jobPosition) => {
    for (let key of Object.values(jobPosition)) {
      if (typeof key === 'string' && key.toLowerCase().includes(term)) {
        return jobPosition;
      }

      if (Array.isArray(key)) {
        for (let value of key) {
          if (value.toLowerCase().includes(term)) {
            return jobPosition;
          }
        }
      }
    }
  });
};

const debounce = (fn: Function, wait: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
};

export { filterBySearchTerm, debounce };
