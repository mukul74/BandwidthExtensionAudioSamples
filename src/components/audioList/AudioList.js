import AudioItem from "../audioItem/AudioItem";
const AudioList = (props) => {
    const { details, dirName } = props;

    const inputFile = details?.filePaths?.inputFile;
    const outputFile = details?.filePaths?.outputFile;

    const noPoly = details?.filePaths?.variants_nopoly;
    const poly = details?.filePaths?.variants_poly;

    return (
        <div className="container-fluid">
            <h1>{details?.categoryName}</h1>
            <div className="row">
                {inputFile && <div className="col-sm-3 col-md-4" >
                    <AudioItem dir={dirName} filePath={inputFile} title="Input Audio" />
                </div>}
                {outputFile && <div className="col-md-offset-4 col-md-4" >
                    <AudioItem dir={dirName} filePath={outputFile} title="Target Audio" />
                </div>}
            </div>
            {details?.filePaths?.variants.length > 0 &&
                <div>
                    <h2>Generated Variants</h2>
                    <div className="row">
                        {details?.filePaths.variants.map(vari => {
                            return (<div className="col-sm-4 col-md-3" >
                                <AudioItem dir={dirName} title={vari.title} filePath={vari.filePath} />
                            </div>)
                        }
                        )}
                    </div>
                </div>
            }

            {
                noPoly && noPoly?.audios.length > 0 && (
                    <div>
                        <h2>{noPoly.title}</h2>
                        <div className="row">
                            {noPoly?.audios.map(vari => {
                                return (<div className="col-sm-4 col-md-3" >
                                    <AudioItem dir={dirName} title={vari.title} filePath={vari.filePath} />
                                </div>)
                            })}
                        </div>
                    </div>
                )
            }
            {
                poly && poly?.audios.length > 0  && (
                    <div>
                        <h2>{poly.title}</h2>
                        <div className="row">
                            {poly?.audios.map(vari => {
                                return (<div className="col-sm-4 col-md-3" >
                                    <AudioItem dir={dirName} title={vari.title} filePath={vari.filePath} />
                                </div>)
                            })}
                        </div>
                    </div>
                )
            }
     

        </div>
    )
}


export default AudioList;