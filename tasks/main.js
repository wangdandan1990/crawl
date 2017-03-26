var async =require('async');
var read =require('./read');
var write =require('./write');
let logger =require('debug')('crawl:main');

var url ='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
async.waterfall([
    function (callback) {
        read(url,callback);
    },
    function (movies, callback) {
        write(movies,callback)
    }

],function (err,result) {
    logger('全部任务执行完毕!');
});
