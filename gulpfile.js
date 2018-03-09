var gulp = require('gulp');
var sftp = require('gulp-sftp');
var GulpSSH = require('gulp-ssh')

gulp.task('sftp', function () {
    return gulp.src('imeepos_runner_new/**/*')
        .pipe(sftp({
            host: '121.42.158.224',
            user: 'root',
            pass: 'Imeepos1989.',
            remotePath: '/data/wwwroot/meepo.com.cn/addons/imeepos_runner_new/'
        }));
});

gulp.task('default', ['sftp'], function (e) {
    gulp.watch('imeepos_runner_new/**/*', function (e) {
        if (e.type === 'changed' || e.type === 'added') {
            changedFile(e.path)
        } else if (e.type === 'deleted') {
            deleteFile(e.path);
        }
        console.log(e);
    });
});

var config = {
    host: '121.42.158.224',
    port: 22,
    username: 'root',
    password: 'Imeepos1989.'
}

var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config
})

function deleteFile(path) {
    path = path.replace(__dirname, './');
    gulpSSH
        .shell(['cd /data/wwwroot/meepo.com.cn/addons/', 'rm -rf ' + path], { filePath: 'shell.log' })
        .pipe(gulp.dest('logs'))
}

function changedFile(path) {
    gulp.src('imeepos_runner_new/**/*')
        .pipe(sftp({
            host: '121.42.158.224',
            user: 'root',
            pass: 'Imeepos1989.',
            remotePath: '/data/wwwroot/meepo.com.cn/addons/imeepos_runner_new/'
        }));
    // path = path.replace(__dirname, '.');
    // gulp.src(path)
    //     .pipe(sftp({
    //         host: '121.42.158.224',
    //         user: 'root',
    //         pass: 'Imeepos1989.',
    //         remotePath: '/data/wwwroot/meepo.com.cn/addons'
    //     }));
}