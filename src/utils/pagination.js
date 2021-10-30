
function pageination(data,callback) {
    return {
        onChange:(current) => {
            callback(current);
        },
        // current:data.page,
        pageSize:10,
        total:data.recordsTotal,
        showTotal:() => {
            return `共${data.recordsTotal}条`
        }
    }
}
export default pageination