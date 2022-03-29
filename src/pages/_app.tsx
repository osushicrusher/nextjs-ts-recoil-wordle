import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil'
import { DebugObserver } from '@/debug/debugObserver'
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
      <RecoilRoot>
        <DebugObserver />
        <Component {...pageProps} />
      </RecoilRoot>
    );
};

export default MyApp;
