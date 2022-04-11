import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import  SearchBar from './SearchBar';
import RecentSearch from './RecentSearch';

const App = ()  => {

  return (
    <AnswersHeadlessProvider
      apiKey={'be41159ec3097b59708d3177052f4f07'}
      experienceKey='support-hub'
      locale='en'
    >
      <SearchBar/>
      <RecentSearch/> 
    </AnswersHeadlessProvider>
  );
}

export default App;
