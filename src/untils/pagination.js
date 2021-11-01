
function pageinations (data,callback) {
    return {
        onChange:(current) => {
            callback(current);
        },
        // current:data.page,
        pageSize:10,
        total:data.Total,
        showTotal:() => {
            return `共${data.Total}条`
        }
    }
}
export default pageinations