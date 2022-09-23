import { fetchLuke } from "./data.js";


const displayLuke = async () => {
  const data = await fetchLuke();
  sortSpecies(data);
};

const sortSpecies = (data) => {
  let html = `
    <article>
      <section class="card">
      <img src="${data.primaryImageSmall}" alt="image">
      </section>
    </article>
  `;
  document.getElementById("app").innerHTML = html;
};

displayLuke();
