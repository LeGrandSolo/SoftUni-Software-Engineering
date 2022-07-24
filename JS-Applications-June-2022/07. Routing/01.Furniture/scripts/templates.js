import { html } from "../node_modules/lit-html/lit-html.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
import { classMap } from "../node_modules/lit-html/directives/class-map.js";
const navTemplate = (ctx, hasLogged) => html`
  <header>
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
      <a id="catalogLink" href="index.html">Dashboard</a>
      <div
        id="guest"
        style=${styleMap(
          !hasLogged ? { display: "inline-block" } : { display: "none" }
        )}
      >
        <a id="loginLink" href="/login" class="active">Login</a>
        <a id="registerLink" href="/register">Register</a>
      </div>
      <div
        id="user"
        style=${styleMap(
          hasLogged ? { display: "inline-block" } : { display: "none" }
        )}
      >
        <a id="createLink" href="/create">Create Furniture</a>
        <a id="profileLink" href="/my-furniture">My Publications</a>
        <a id="logoutBtn" href="javascript:void(0)" @click=${ctx.logout}
          >Logout</a
        >
      </div>
    </nav>
  </header>
`;
const dashboardTemplate = (
  ctx,
  hasLogged,
  furnitureData
) => html` ${navTemplate(ctx, hasLogged)}
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
      </div>
    </div>
    <div class="row space-top">
      ${furnitureData.map((f) => furnitureTemplate(f, ctx))}
    </div>
  </div>`;
const myFurnitureTemplate = (ctx, furnitureData) => html` ${navTemplate(
    ctx,
    true
  )}
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>My Furniture</h1>
        <p>This is a list of your publcations.</p>
      </div>
    </div>
    <div class="row space-top">
      ${furnitureData.map((f) => furnitureTemplate(f, ctx))}
    </div>
  </div>`;
const loginFormTemplate = (ctx) => html`
  ${navTemplate(ctx)}
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Login User</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${ctx.login}>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email" />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input
              class="form-control"
              id="password"
              type="password"
              name="password"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Login" />
        </div>
      </div>
    </form>
  </div>
`;
const registerTemplate = (ctx) => html` <div class="container">
  ${navTemplate(ctx)}
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Register New User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${ctx.register}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input class="form-control" id="email" type="text" name="email" />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class="form-control"
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="rePass">Repeat</label>
          <input
            class="form-control"
            id="rePass"
            type="password"
            name="rePass"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </div>
    </div>
  </form>
</div>`;
const furnitureTemplate = (furniture, ctx) => html` <div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body" id=${furniture._id}>
      <img src=${furniture.img} />
      <p>${furniture.description}</p>
      <footer>
        <p>Price: <span>${furniture.price} $</span></p>
      </footer>
      <div>
        <a
          href="/details/${furniture._id}"
          @click=${ctx.showDetails}
          class="btn btn-info"
          >Details</a
        >
      </div>
    </div>
  </div>
</div>`;
const createFurnitureTemplate = (ctx, validIds, invalidIds) => {
  function classes(field) {
    return {
      "form-control": true,
      "is-valid": validIds.includes("new-" + field),
      "is-invalid": invalidIds.includes("new-" + field),
    };
  }
  return html` <div class="container">
    ${navTemplate(ctx, true)}
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Create New Furniture</h1>
        <p>Please fill all fields.</p>
      </div>
    </div>
    <form @submit=${ctx.create}>
      <div class="row space-top">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input
              class=${classMap(classes("make"))}
              id="new-make"
              type="text"
              name="make"
            />
          </div>
          <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input
              class=${classMap(classes("model"))}
              id="new-model"
              type="text"
              name="model"
            />
          </div>
          <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input
              class=${classMap(classes("year"))}
              id="new-year"
              type="number"
              name="year"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-description"
              >Description</label
            >
            <input
              class=${classMap(classes("description"))}
              id="new-description"
              type="text"
              name="description"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input
              class=${classMap(classes("price"))}
              id="new-price"
              type="number"
              name="price"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input
              class=${classMap(classes("image"))}
              id="new-image"
              type="text"
              name="img"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" for="new-material"
              >Material (optional)</label
            >
            <input
              class="form-control"
              id="new-material"
              type="text"
              name="material"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Create" />
        </div>
      </div>
    </form>
  </div>`;
};
const detailsTemplate = (ctx, furniture, isOwner) => html` ${navTemplate(ctx)}
  <div class="container">
    <div class="row space-top">
      <div class="col-md-12">
        <h1>Furniture Details</h1>
      </div>
    </div>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="card text-white bg-primary">
          <div class="card-body">
            <img src="/images/chair.jpg" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <p>Make: <span>${furniture.make}</span></p>
        <p>Model: <span>${furniture.model}</span></p>
        <p>Year: <span>${furniture.year}</span></p>
        <p>Description: <span>${furniture.description}</span></p>
        <p>Price: <span>${furniture.price}</span></p>
        <p>Material: <span>${furniture.material}</span></p>
        <div
          style=${styleMap(
            isOwner ? { display: "block" } : { display: "none" }
          )}
        >
          <a href="/" class="btn btn-info">Edit</a>
          <a href="/" @click=${ctx.delete} class="btn btn-red">Delete</a>
        </div>
      </div>
    </div>
  </div>`;
export {
  navTemplate,
  loginFormTemplate,
  registerTemplate,
  dashboardTemplate,
  createFurnitureTemplate,
  myFurnitureTemplate,
  detailsTemplate,
};
