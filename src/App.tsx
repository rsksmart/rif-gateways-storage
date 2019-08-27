import React from "react";
import { Alert, LogoNavbar, LogoFooter } from "rifui";

const App: React.FC = () => {
  return (
    <div>
      <div className="header bg-dark">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg pt-3">
            <a className="navbar-brand" href="#">
              <LogoNavbar />
            </a>
            <button
              className="navbar-toggler d-lg-none ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <form className="form-inline row pl-3">
                <input
                  className="form-control mr-sm-2 ml-3 col-6"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-primary my-2 my-sm-0 ml-1"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>

      <div className="content">
        <div className="container-fluid">
          <section id="typography" className="content-section">
            <h2 className="text-primary">TYPOGRAPHY</h2>

            <h3 className="mt-4">
              <small className="text-muted">Titles</small>
            </h3>
            <h1>h1. Montserrat Bold 32px</h1>
            <h2>h2. Montserrat Light 24px</h2>
            <h3>h3. Montserrat Regular 22px</h3>

            <h3 className="mt-4">
              <small className="text-muted">Sub Titles</small>
            </h3>
            <h4>h4. Montserrat Medium 18px</h4>
            <h5>h5. Montserrat SemiBold 16px</h5>
            <h6>h6. Montserrat Bold 12px</h6>

            <h3 className="mt-4">
              <small className="text-muted">Text / Content</small>
            </h3>
            <p>Default Text: Montserrat Medium 16px</p>
            <label>label: Roboto Condensed Bold 16px</label>
            <br />
            <data>data: Roboto Condensed Regular 16px</data>
          </section>
          <section id="colors" className="content-section">
            <h2 className="text-primary">COLORS</h2>

            <h3 className="mt-4">
              <small className="text-muted">Text</small>
            </h3>
            <span className="text-default">.text-default</span>
            <br />
            <span className="text-primary">.text-primary</span>
            <br />
            <span className="text-secondary">.text-secondary</span>
            <br />
            <span className="text-info">.text-info</span>
            <br />
            <span className="text-success">.text-success</span>
            <br />
            <span className="text-danger">.text-danger</span>
            <br />
            <span className="text-warning">.text-warning</span>
            <br />
            <span className="text-light bg-dark">.text-light</span>

            <h3 className="mt-4">
              <small className="text-muted">Links</small>
            </h3>
            <a href="#">Default Link</a>
            <br />
            <a href="#" className="link-alt">
              Secondary Link
            </a>

            <h3 className="mt-4">
              <small className="text-muted">Backgrounds</small>
            </h3>
            <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
            <div className="p-3 mb-2 bg-primary-alt text-white">
              .bg-primary-alt
            </div>
            <div className="p-3 mb-2 bg-secondary text-white">
              .bg-secondary
            </div>
            <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
            <div className="p-3 mb-2 bg-dark-alt text-white">.bg-dark-alt</div>
            <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
            <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
            <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
            <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
            <div className="p-3 mb-2 bg-warning text-white">.bg-warning</div>
          </section>
          <section id="messaging" className="content-section">
            <h2 className="text-primary">MESSAGING</h2>

            <h3 className="mt-4">
              <small className="text-muted">Alerts</small>
            </h3>

            <Alert variant="primary">
              A simple secondary alert—check it out!
            </Alert>
            <Alert variant="secondary">
              A simple secondary alert—check it out!
            </Alert>
            <Alert variant="info">A simple secondary alert—check it out!</Alert>
            <Alert variant="light">
              A simple secondary alert—check it out!
            </Alert>
            <Alert variant="success">
              A simple secondary alert—check it out!
            </Alert>
            <Alert variant="danger">
              A simple secondary alert—check it out!
            </Alert>
            <Alert variant="warning">
              A simple secondary alert—check it out!
            </Alert>
          </section>
          <section id="breadcrumbs" className="content-section">
            <h2 className="text-primary">BREADCRUMBS</h2>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Library
                </li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Library</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>
          </section>

          <section id="lists" className="content-section">
            <h2 className="text-primary">LISTS</h2>
            <div className="row">
              <div className="col-md-6">
                <h3 className="mt-4">
                  <small className="text-muted">Ordered List</small>
                </h3>
                <ol>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ol>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ol>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ol>
              </div>
              <div className="col-md-6">
                <h3 className="mt-4">
                  <small className="text-muted">Unordered List</small>
                </h3>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>
                    Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="pagination" className="content-section">
            <h2 className="text-primary mb-4">PAGINATION</h2>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </nav>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-chevron-left" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          <section id="progress-bars" className="content-section">
            <h2 className="text-primary mb-4">PROGRESS BARS</h2>

            <h3 className="mt-4">
              <small className="text-muted">Solid</small>
            </h3>
            <div className="progress mb-2">
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress mb-2">
              <div
                className="progress-bar bg-secondary"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress mb-2">
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            <h3 className="mt-4">
              <small className="text-muted">Striped</small>
            </h3>
            <div className="progress mb-2">
              <div
                className="progress-bar progress-bar-striped bg-primary"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress mb-2">
              <div
                className="progress-bar progress-bar-striped bg-secondary"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="progress mb-2">
              <div
                className="progress-bar progress-bar-striped bg-info"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </section>

          <section id="tabs" className="content-section">
            <h2 className="text-primary mb-4">TABS</h2>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p>
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth. Cosby sweater eu banh mi, qui irure terry richardson ex
                  squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                  quis cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p>
                  Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                  single-origin coffee squid. Exercitation +1 labore velit, blog
                  sartorial PBR leggings next level wes anderson artisan four
                  loko farm-to-table craft beer twee. Qui photo booth
                  letterpress, commodo enim craft beer mlkshk aliquip jean
                  shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,
                  assumenda labore aesthetic magna delectus mollit. Keytar
                  helvetica VHS salvia yr, vero magna velit sapiente labore
                  stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                  sustainable jean shorts beard ut DIY ethical culpa terry
                  richardson biodiesel. Art party scenester stumptown, tumblr
                  butcher vero sint qui sapiente accusamus tattooed echo park.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <p>
                  Etsy mixtape wayfarers, ethical wes anderson tofu before they
                  sold out mcsweeney's organic lomo retro fanny pack lo-fi
                  farm-to-table readymade. Messenger bag gentrify pitchfork
                  tattooed craft beer, iphone skateboard locavore carles etsy
                  salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                  Leggings gentrify squid 8-bit cred pitchfork. Williamsburg
                  banh mi whatever gluten-free, carles pitchfork biodiesel fixie
                  etsy retro mlkshk vice blog. Scenester cred you probably
                  haven't heard of them, vinyl craft beer blog stumptown.
                  Pitchfork sustainable tofu synth chambray yr.
                </p>
              </div>
            </div>
          </section>

          <section id="buttons" className="content-section">
            <h2 className="text-primary mb-4">BUTTONS</h2>

            <h3 className="mt-4">
              <small className="text-muted">Solid</small>
            </h3>
            <button type="button" className="btn btn-primary mb-1">
              Primary
            </button>
            <button type="button" className="btn btn-secondary mb-1">
              Secondary
            </button>
            <button type="button" className="btn btn-default mb-1">
              Default
            </button>

            <h3 className="mt-4">
              <small className="text-muted">Reversed</small>
            </h3>
            <button type="button" className="btn btn-outline-primary mb-1">
              Primary
            </button>
            <button type="button" className="btn btn-outline-secondary mb-1">
              Secondary
            </button>
            <button type="button" className="btn btn-outline-default mb-1">
              Default
            </button>
          </section>

          <section id="popups" className="content-section">
            <h2 className="text-primary mb-4">POPUPS</h2>

            <h3 className="mt-4">
              <small className="text-muted">Directional</small>
            </h3>
            <button
              type="button"
              className="btn btn-secondary mb-1"
              data-container="body"
              data-toggle="popover"
              data-placement="top"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-original-title=""
              title=""
            >
              Popover on top
            </button>

            <button
              type="button"
              className="btn btn-secondary mb-1"
              data-container="body"
              data-toggle="popover"
              data-placement="right"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-original-title=""
              title=""
            >
              Popover on right
            </button>

            <button
              type="button"
              className="btn btn-secondary mb-1"
              data-container="body"
              data-toggle="popover"
              data-placement="bottom"
              data-content="Vivamus
						sagittis lacus vel augue laoreet rutrum faucibus."
              data-original-title=""
              title=""
            >
              Popover on bottom
            </button>

            <button
              type="button"
              className="btn btn-secondary mb-1"
              data-container="body"
              data-toggle="popover"
              data-placement="left"
              data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
              data-original-title=""
              title=""
            >
              Popover on left
            </button>

            <h3 className="mt-4">
              <small className="text-muted">With Title</small>
            </h3>
            <button
              type="button"
              className="btn btn-primary mb-1"
              data-toggle="popover"
              title=""
              data-content="And here&#39;s some amazing content. It&#39;s very engaging. Right?"
              data-original-title="Popover title"
            >
              Click to toggle popover
            </button>
          </section>

          <section id="modals" className="content-section">
            <h2 className="text-primary mb-4">MODALS</h2>

            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Standard Modal
            </button>

            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal2"
            >
              Large Modal
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h3>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModal2"
              role="dialog"
              aria-labelledby="exampleModalLabel2"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h3 className="modal-title" id="exampleModalLabel2">
                      Modal title
                    </h3>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Raw denim you probably haven't heard of them jean shorts
                    Austin. Nesciunt tofu stumptown aliqua, retro synth master
                    cleanse. Mustache cliche tempor, williamsburg carles vegan
                    helvetica
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="forms" className="content-section">
            <h2 className="text-primary mb-4">FORMS</h2>

            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Text Input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput2"
                      placeholder="name@example.com"
                      required
                    />
                  </div>

                  <label>Standard Checkbox</label>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label">Check me out</label>
                  </div>

                  <div>
                    <label>Inline Checkbox</label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="option1"
                      />
                      <label className="form-check-label">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="option2"
                      />
                      <label className="form-check-label">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        value="option3"
                        disabled
                      />
                      <label className="form-check-label">3 (disabled)</label>
                    </div>
                  </div>
                  <br />

                  <label>Standard Radio</label>
                  <div className="form-group form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label">Default radio</label>
                  </div>

                  <div>
                    <label>Inline Radio</label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label className="form-check-label">1</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label className="form-check-label">2</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"
                        disabled
                      />
                      <label className="form-check-label">3 (disabled)</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="col-form-label-sm">
                      Dropdown Label (small)
                    </label>
                    <label className="wrap">
                      <select
                        className="form-control dropdown"
                        id="exampleFormControlSelect1"
                      >
                        <option disabled selected>
                          Select an option ...
                        </option>
                        <option>Option one</option>
                        <option>Option two</option>
                        <option>Option three</option>
                        <option>Option four</option>
                        <option>Option five</option>
                      </select>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">
                      Multi Select Label (regular)
                    </label>
                    <select
                      multiple
                      className="form-control"
                      id="exampleFormControlSelect2"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label-lg">
                      Textarea Label (large)
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                    />
                  </div>

                  <button className="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
      <footer id="footer" className="bg-dark-alt pt-4 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 mb-4">
              <LogoFooter />
            </div>
            <div className="col-sm-3 mb-4">
              <h5 className="text-light">RIF</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="active" href="#">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="disabled" href="#" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 mb-4">
              <h5 className="text-light">RESOURCES</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="active" href="#">
                    Active
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="disabled" href="#" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 mb-4">
              <h5 className="text-light">COPYRIGHT</h5>
              <p className="text-primary">
                © 2019 RIF Labs Limited. <br />
                All Rights Reserved.
              </p>
              <ul className="nav">
                <li className="nav-item">
                  <a className="nav-link h3" href="#">
                    <i className="fab fa-facebook-square" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link h3" href="#">
                    <i className="fab fa-twitter-square" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link h3" href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
