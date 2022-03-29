import React, { useEffect } from 'react';
import {
  useRecoilCallback,
  useRecoilSnapshot,
} from 'recoil';

export function DebugObserver() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

// export function DebugObserver(): React.Node {
//   const onClick = useRecoilCallback(({snapshot}) => async () => {
//     console.debug('Atom values:');
//     for (const node of snapshot.getNodes_UNSTABLE()) {
//       const value = await snapshot.getPromise(node);
//       console.debug(node.key, value);
//     }
//   }, []);

//   return <button onClick={onClick}>Dump State</button>
// }
