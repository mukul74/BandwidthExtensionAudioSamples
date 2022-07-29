const AudioItem = (props) => {
    const { filePath, title, dir } = props;

    return <div style={{ margin: "4rem 1rem" }}>
        <div class="well well-lg">
            <div style={{ maxWidth: '100%'}}>
                <h4 style={{ fontSize: '11px', fontWeight: 'bold', maxWidth: '100%', wordBreak: 'break-all' }}>{title}</h4>
            </div>

            <audio src={require(`../../media/Results/${dir}/${filePath}`)} controls style={{ width: "100%" }} />
        </div>
    </div>
}

export default AudioItem;