/**
 * Função de throttle retirada do loadash. Colocado aqui para evitar a importação do loadash apenas para um caso
 * @param func função que irá receber o throttle
 * @param wait quantidade de milisegundos que precisará esperar
 * @param options opções do throttle
 */
export function throttle(func: () => void, wait: number, options?: any) {
  let context: any;
  let args: any;
  let result: any;
  let timeout: NodeJS.Timeout | null = null;
  let previous = 0;
  if (!options) options = {};
  var later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
