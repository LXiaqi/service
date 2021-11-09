
function pageinations (data,callback) {
    return {
        onChange:(current,size) => {
            callback(current,size);
        },
        total:data.Total,
        showTotal:() => {
            return `共${data.Total}条`
        }
    }
}
export default pageinations