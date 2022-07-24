import AudioItem from "../audioItem/AudioItem";
const AudioList = (props) => {
    const { details } = props;
    console.log(details)
    const inputFile = details?.filePaths?.inputFile;
    const outputFile = details?.filePaths?.outputFile;

    const noPoly = details?.filePaths?.variants_nopoly;
    const poly = details?.filePaths?.variants_poly;

    return (
        <div className="container-fluid">
            <h1>{details?.categoryName}</h1>
            <div className="row">
                <div className="col-sm-3 col-md-4" >
                    <AudioItem filePath={inputFile} title="Input Audio" />
                </div>
                <div className="col-md-offset-4 col-md-4" >
                    <AudioItem filePath={outputFile} title="Target Audio" />
                </div>
            </div>
            {details?.filePaths?.variants.length > 0 &&
                <div>
                    <h2>Generated Variants</h2>
                    <div className="row">
                        {details?.filePaths.variants.map(vari => {
                            return (<div className="col-sm-4 col-md-3" >
                                <AudioItem title={vari.title} filePath={vari.filePath} />
                            </div>)
                        }
                        )}
                    </div>
                </div>
            }

            {
                noPoly && (
                    <div>
                        <h2>{noPoly.title}</h2>
                        <div className="row">
                            {noPoly?.variants.map(vari => {
                                return (<div className="col-sm-4 col-md-3" >
                                    <AudioItem title={vari.title} filePath={vari.filePath} />
                                </div>)
                            })}
                        </div>
                    </div>
                )
            }
            {
                poly && (
                    <div>
                        <h2>{poly.title}</h2>
                        <div className="row">
                            {poly?.variants.map(vari => {
                                return (<div className="col-sm-4 col-md-3" >
                                    <AudioItem title={vari.title} filePath={vari.filePath} />
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