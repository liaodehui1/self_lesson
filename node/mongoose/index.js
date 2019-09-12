const mongoose = require('mongoose');

//连接数据库
//指定的数据库不需要存在，当插入数据时自动创建
mongoose.connect('mongodb://localhost/test');
//设计表结构
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));