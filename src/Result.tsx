
interface IResult {
    question: string;
    answer: string;
}

const Result = (props: IResult) => {

    const { question, answer } = props

    return (
        <article className="result">

            <h3 className="title"> {question} </h3> 

            <div className="body"> {answer}</div>

        </article>
    )

}

export default Result