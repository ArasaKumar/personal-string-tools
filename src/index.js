btnRtrim = () => {
    const data = document.getElementById('originalData').value.split('\n');
    let strFormattedData = '';
    for (var i = 0; i < data.length; i++) {
        strFormattedData = strFormattedData + data[i].trimEnd() + '\n';
    }
    document.getElementById('modifiedData').value = strFormattedData;
};

copyModifiedText = () => {
    const modTxtArea = document.getElementById('modifiedData');
    modTxtArea.focus();
    modTxtArea.select();
    alert(document.execCommand('copy'));
};

reset = () => {
    document.getElementById('modifiedData').value = '';
    document.getElementById('originalData').value = '';
};
