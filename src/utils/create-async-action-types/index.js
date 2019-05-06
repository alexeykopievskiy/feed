const types = ['REQUEST', 'SUCCESS', 'FAILURE'];

export default function(ns, tp) {
  const namespace = ns ? `${ns}/` : '';
  const type = tp.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
  const action = {};

  types.forEach(t => {
    action[t] = `${namespace}${type}_${t}`;
  });

  return action;
}
