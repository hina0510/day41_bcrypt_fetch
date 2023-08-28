const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.get("/", (req, res)=>{
    const pwd = "test";
    const changePwd = bcrypt.hashSync(pwd, 10);
    /*
    bcrypt.hashSync(pwd, 10) : 암호화, 숫자는 솔트(salt)라고 하며 수가 높을수록
    높은 수준으로 암호화(너무 높으면 처리속도가 느려짐)
    */
    console.log("평문 비밀번호 : ", pwd);
    console.log("변경 비밀번호 : ", changePwd);
    console.log("비밀번호 비교 : ", pwd==changePwd); //false
    const result = bcrypt.compareSync(pwd, changePwd); //일치하는지 비교. 앞에는 평문 뒤에는 암호문
    console.log("비밀번호 비교 : ", result); //true
    res.send("비밀번호");
});

app.listen(3000, ()=>{console.log("3000 연동")});