let cooikeUtil = {


    /**
     * 设置cooike
     * @param  name cooike名称
     * @param  value cookike值
     * @param  minsToLive cooike过期时间
     */
    setCookie: function (name, value, minsToLive) {
        // 对 cookie 值进行编码以转义其中的分号、逗号和空格
        var cookie = name + "=" + encodeURIComponent(value);

        if (typeof minsToLive === "number") {
            /* 设置 max-age 属性 */
            console.log(111111)
            cookie += "; max-age=" + (minsToLive * 30 * 60);
        }
        document.cookie = cookie;
    },

    /**
     * 获取cooike
     * @param name cooike名称
     * @returns 
     */
    getCookie: function (name) {
        // 拆分 cookie 字符串
        var cookieArr = document.cookie.split(";");

        // 循环遍历数组元素
        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");

            /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
            if (name == cookiePair[0].trim()) {
                // 解码cookie值并返回
                return decodeURIComponent(cookiePair[1]);
            }
        }
        // 如果未找到，则返回null
        return null;
    },

    clearCooike: function () {
        document.cookie = null;
    },
}