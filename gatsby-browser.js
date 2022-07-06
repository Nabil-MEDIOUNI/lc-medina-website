import './src/shared/styles/index.scss';

export const onServiceWorkerUpdateReady = () => {
  const answer = 'This app has been updated. display the latest version?';
  if (answer === true) {
    window.location.reload();
  }
};
