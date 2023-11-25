const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next();
    } catch (error) {
      next(error);
    }
});

// userSchema.pre('save', async function (next) {
//     const user = this;
//     if (user.isModified('password')) {
//       user.password = await bcrypt.hash(user.password, 10);
//     }
//     next();    // NEW DASHBOARD CODE MIGHT HAVE TO USE IT
//   });









userSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
      throw error;
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;