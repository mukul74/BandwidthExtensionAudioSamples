import DATA from './data.json';
import AudioList from './components/audioList/AudioList'

console.log(DATA)

function App() {

  return (
    <div className="App">
      <h1 className="page-header" style={{ textAlign: 'center', margin: '2rem auto'}} >Bandwidth Extension
      </h1>
      <div className='container-fluid'>
        <ul class="nav nav-tabs">
          {DATA.map((cat, index) => <li className={index === 0 && 'active'}>
            <a style={{
              height: "60px",
              lineHeight: '32px',
              fontWeight: 'bold',
              fontSize: '17px'
            }} data-toggle="tab" href={`#${cat?.tabId}`}>{cat?.categoryName}
            </a>
          </li>)}
        </ul>

        <div class="tab-content">
          {
            DATA.map((cat, index) => {
              return (
                <div key={cat?.tabId} id={cat?.tabId} className={`tab-pane fade ${index === 0 && 'in active'}`}>
                  <AudioList details={cat} />
                </div>
              )
            })
          }
        </div>

      </div>

    </div>
  );
}

export default App;
