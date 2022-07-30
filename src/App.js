import DATA from './data.json';
import AudioList from './components/audioList/AudioList'

function App() {
  return (
    <div className="App">
      <h1 className="page-header" style={{ fontWeight: 'bolder', borderBottom: 0, textAlign: 'center', margin: '2rem auto' }} >Bandwidth Extension
      </h1>
      <div className='container-fluid'>
        <ul class="nav nav-tabs">
          {DATA.map((cat, index) => <li className={index === 0 && 'active'}>
            <a style={{
              height: "60px",
              lineHeight: '32px',
              fontWeight: 'bold',
              fontSize: '17px'
            }} data-toggle="tab" href={`#${cat?.rootTabId}`}>{cat?.categoryName}
            </a>
          </li>)}
        </ul>

        <div class="tab-content">
          {
            DATA.map((cat, ir) => {
              return (
                <div key={cat?.rootTabId} id={cat?.rootTabId} className={`tab-pane fade ${ir === 0 && 'in active'}`}>

                  <div className='container-fluid'>
                    <ul class="nav nav-tabs">
                      {cat.subCategories && cat.subCategories.map((subCat, index) => <li className={index === 0 && 'active'}>
                        <a style={{
                          height: "60px",
                          lineHeight: '32px',
                          fontWeight: 'bold',
                          fontSize: '17px'
                        }} data-toggle="tab" href={`#${subCat?.tabId}`}>{subCat?.categoryName}
                        </a>
                      </li>)}
                    </ul>

                    <div class="tab-content">
                      {cat.subCategories && cat.subCategories.map((subCat, index) => {
                        return (
                          <div key={subCat?.tabId} id={subCat?.tabId} className={`tab-pane fade ${index === 0 && 'in active'}`}>
                             <AudioList details={subCat} dirName={cat?.dirName} /> 
                          </div>
                        )
                      })
                      }
                    </div>
                  </div>

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

