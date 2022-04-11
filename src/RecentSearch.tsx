import { useAnswersState } from '@yext/answers-headless-react';
import Result from './Result';


const RecentSearch = () => {

  const answers = useAnswersState(state => state);
  const verticals = answers?.universal?.verticals;
  let results: any = [] 


  if(verticals) {
    results = verticals[0]?.results
  } 

  return (
        <div className='results'>

            {

                results?.map((result: any, index: number) => {

                    const { rawData } = result

                    const { question, answer } = rawData

                    return <Result key={index} question={question} answer={answer} />

                })
            }

        </div>
     
    );

}

export default RecentSearch