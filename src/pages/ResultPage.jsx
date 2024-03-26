import Result from '../components/Result.jsx'

function ResultPage({ list }) {
    return (
    <div>
      <h1>Results:</h1>
      <Result list={list} />
    </div>
    )
}

export default ResultPage;
