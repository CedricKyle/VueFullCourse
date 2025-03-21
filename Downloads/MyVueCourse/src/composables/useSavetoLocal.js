import {ref, watch} from 'vue'

export function useSavetoLocal(key, defaultValue){
  const storedValue = localStorage.getItem(key);
  const data = ref(storedValue ? JSON.parse(storedValue) : defaultValue);

  watch(data, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  })
  
  return {data};
}