import { useAnswersActions } from '@yext/answers-headless-react';
import { ChangeEvent, KeyboardEvent, useCallback } from 'react';

const SearchBar = () => {
  const answers = useAnswersActions();

  const handleTyping = useCallback((e: ChangeEvent<HTMLInputElement>) => {

    answers.setQuery(e.target.value);

  }, [answers]);
  
  const handleKeyDown = useCallback((evt: KeyboardEvent<HTMLInputElement>) => {

    if (evt.key === 'Enter' ) {
      answers.executeUniversalQuery();
    }
    
  }, [answers]);

  return (
    <div className='search-container'>

      <div className='search-bar'>

        <input placeholder='Ask a question' onChange={handleTyping} onKeyDown={handleKeyDown}/>

        <button onClick={() => answers.executeUniversalQuery()}> Search </button>

      </div>

    </div> )   
            
}

export default SearchBar