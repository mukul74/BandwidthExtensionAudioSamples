import AudioItem from "../audioItem/AudioItem";
const AudioList = (props) => {
    const { details } = props;
    console.log(details)
    const inputFile = details?.filePaths?.inputFile;
    const outputFile = details?.filePaths?.outputFile;
    return (
        <div className="container-fluid">
            <h1>{details?.categoryName}</h1>
            <div className="row">
                <div className="col-sm-3 col-md-4" >
                    <AudioItem filePath={inputFile} title="Input Audio"/>
                </div>
                <div className="col-md-offset-4 col-md-4" >
                    <AudioItem filePath={outputFile} title="Target Audio" />
                </div>
            </div>
            <h2>Generated Variants</h2>
            <div className="row">
                {details?.filePaths?.variants.length > 0 && details?.filePaths.variants.map(vari => {
                    return (<div className="col-sm-4 col-md-3" >
                        <AudioItem title={vari.title} filePath={vari.filePath}/>
                    </div>)
                }
                )}
            </div>
        </div>
    )
}


export default AudioList;