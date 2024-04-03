const{src,dest,watch,series} = require('gulp')
//const khai báo src khai báo đường dẫn/dest xác định mục đích biên dịch scss trong gulp/watch theo dỏi nhật ký hoạt động và thay đổi tương ứng series ác định một chuỗi các tác vụ sẽ được thực hiện tuần tự trong Gulp
//and
//const declares src declares path/dest defines the purpose of compiling scss in gulp/watch monitors the activity log and corresponding changes series defines a sequence of tasks to be performed sequentially in Gulp
const sass = require('gulp-sass') (require ('sass'))
//  plugin Gulp  biên dịch các tệp Sass thành CSS.
//and
////  plugin Gulp  biên dịch các tệp Sass thành CSS.
function buildStyles(){
    return src('scss/**/*.scss')
       .pipe(sass())
       .pipe(dest('css'))
}
// builStyles giúp biên dịch scss 
//and
//buildStyles helps compile scss
 function watchTack(){
     watch('scss/**/*.scss',series(buildStyles))
 }
// theo dõi nhật ký hoạt động
//and
//Monitor activity logs
 exports.default = series(buildStyles, watchTack)
// exports đang xuất giá trị của  Gulp .
//and
// exports is exporting the value of Gulp .
