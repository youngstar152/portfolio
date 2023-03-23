'use strict';

const products = [
  {
    title: "落単らくだ",
    description: "楽単した授業の情報を共有できるサイトです。",
    image_path: "./images/products/rakutan.png",
    link: "https://rakutan-rakuda.netlify.app"
  },
  {
    title: "通知で覚える英単語",
    description: "通知で英単語を簡単に覚えられるアプリです。",
    image_path: "./images/products/tutan.png",
    link: "https://apps.apple.com/jp/app/%E9%80%9A%E7%9F%A5%E3%81%A7%E8%A6%9A%E3%81%88%E3%82%8B%E8%8B%B1%E5%8D%98%E8%AA%9E/id1537063008"
  },
  
];

const skills = [
  {
    name: "HTML",
    description: "大体書ける",
    level: 5,
  },
  {
    name: "CSS",
    description: "大体書ける",
    level: 4,
  },
];

const productsTable = document.getElementById('products_table');
products.forEach(product => {
  const tr = document.createElement('tr');

  const imageTd = document.createElement('td');
  const img = document.createElement('img');
  img.src = product.image_path;
  img.alt = product.title;
  img.style = "width: 100px; height: 100px; object-fit: cover; border-radius: 10px;";
  imageTd.appendChild(img);
  tr.appendChild(imageTd);

  const detailTd = document.createElement('td');
  const h3 = document.createElement('h3');
  const a = document.createElement('a');
  a.textContent = product.title;
  a.href = product.link;
  a.target = "_blank";
  h3.appendChild(a);
  const p = document.createElement('p');
  p.textContent = product.description;
  tr.appendChild(h3);
  tr.appendChild(p);

  productsTable.appendChild(tr);
});

const skillsTable = document.getElementById('skills_table');
skills.forEach((skill) => {
  const tr = document.createElement('tr');
  const nameTd = document.createElement('td');
  nameTd.textContent = skill.name;
  const levelTd = document.createElement('td');
  for (let i = 0; i < skill.level; i++) {
    const img = document.createElement('img');
    img.src = "./images/level_icon/icon.png";
    img.width = 12;
    img.style = "padding: 2px";
    levelTd.appendChild(img);
  }
  const descTd = document.createElement('td');
  descTd.textContent = skill.description;
  tr.appendChild(nameTd);
  tr.appendChild(levelTd);
  tr.appendChild(descTd);

  skillsTable.appendChild(tr);
})