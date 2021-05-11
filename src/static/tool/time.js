
const filterTime = (time) => {
    //  补0
    let filterZero = (i) => {
        return i < 10 ? `0${i}` : i
    }
    let [t1, t2] = [
        filterZero(new Date(time).getHours()),
        filterZero(new Date(time).getMinutes()),
    ]
    console.log(`当前时间：${t1}:${t2}`);

    filterRang()
    function filterRang() {
        //  分钟取整运算
        let i = parseInt(t2)
        if (i >= 0 && i <= 30) {
            t2 = 30
        } else {
            // 小时进位 
            t2 = `00`
            t1 = parseInt(t1) + 1
            filterHours(t1)
        }
    }
    function filterHours(i) {
        i = parseInt(i)
        // 现在是24小时制，可修改为12小时制
        if (i >= 0 && i < 24) {
            t1 = filterZero(i)
        }
    }
    // console.log(`${t1}-${t2}-${t3} ${t4}:${t5}`);
    console.log(`${t1}:${t2}`)
    return `${t1}:${t2}`;
}

export default filterTime