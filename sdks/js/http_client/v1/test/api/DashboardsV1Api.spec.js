// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.5
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.DashboardsV1Api();
  });

  describe('(package)', function() {
    describe('DashboardsV1Api', function() {
      describe('createDashboard', function() {
        it('should call createDashboard successfully', function(done) {
          // TODO: uncomment, update parameter values for createDashboard call and complete the assertions
          /*
          var owner = "owner_example";
          var body = new PolyaxonSdk.V1Dashboard();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.widgets = [new PolyaxonSdk.V1WidgetSpec()];
          body.widgets[0].kind = "";
          body.widgets[0].search = new PolyaxonSdk.V1SearchSpec();
          body.widgets[0].search.query = "";
          body.widgets[0].search.sort = "";
          body.widgets[0].search.limit = 0;
          body.widgets[0].search.groupby = "";
          body.widgets[0].search.columns = "";
          body.widgets[0].meta = ;
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.createDashboard(owner, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Dashboard);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            {
              let dataCtr = data.widgets;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1WidgetSpec);
                expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("");
                expect(data.search).to.be.a(PolyaxonSdk.V1SearchSpec);
                      expect(data.search.query).to.be.a('string');
                  expect(data.search.query).to.be("");
                  expect(data.search.sort).to.be.a('string');
                  expect(data.search.sort).to.be("");
                  expect(data.search.limit).to.be.a('number');
                  expect(data.search.limit).to.be(0);
                  expect(data.search.groupby).to.be.a('string');
                  expect(data.search.groupby).to.be("");
                  expect(data.search.columns).to.be.a('string');
                  expect(data.search.columns).to.be("");
                expect(data.meta).to.be.a(Object);
                expect(data.meta).to.be();
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteDashboard', function() {
        it('should call deleteDashboard successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteDashboard call
          /*
          var owner = "owner_example";
          var uuid = "uuid_example";

          instance.deleteDashboard(owner, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getDashboard', function() {
        it('should call getDashboard successfully', function(done) {
          // TODO: uncomment, update parameter values for getDashboard call and complete the assertions
          /*
          var owner = "owner_example";
          var uuid = "uuid_example";

          instance.getDashboard(owner, uuid, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Dashboard);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            {
              let dataCtr = data.widgets;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1WidgetSpec);
                expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("");
                expect(data.search).to.be.a(PolyaxonSdk.V1SearchSpec);
                      expect(data.search.query).to.be.a('string');
                  expect(data.search.query).to.be("");
                  expect(data.search.sort).to.be.a('string');
                  expect(data.search.sort).to.be("");
                  expect(data.search.limit).to.be.a('number');
                  expect(data.search.limit).to.be(0);
                  expect(data.search.groupby).to.be.a('string');
                  expect(data.search.groupby).to.be("");
                  expect(data.search.columns).to.be.a('string');
                  expect(data.search.columns).to.be("");
                expect(data.meta).to.be.a(Object);
                expect(data.meta).to.be();
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listDashboardNames', function() {
        it('should call listDashboardNames successfully', function(done) {
          // TODO: uncomment, update parameter values for listDashboardNames call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listDashboardNames(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListDashboardsResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1Dashboard);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.deleted).to.be.a('boolean');
                expect(data.deleted).to.be(false);
                {
                  let dataCtr = data.widgets;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(PolyaxonSdk.V1WidgetSpec);
                    expect(data.kind).to.be.a('string');
                    expect(data.kind).to.be("");
                    expect(data.search).to.be.a(PolyaxonSdk.V1SearchSpec);
                          expect(data.search.query).to.be.a('string');
                      expect(data.search.query).to.be("");
                      expect(data.search.sort).to.be.a('string');
                      expect(data.search.sort).to.be("");
                      expect(data.search.limit).to.be.a('number');
                      expect(data.search.limit).to.be(0);
                      expect(data.search.groupby).to.be.a('string');
                      expect(data.search.groupby).to.be("");
                      expect(data.search.columns).to.be.a('string');
                      expect(data.search.columns).to.be("");
                    expect(data.meta).to.be.a(Object);
                    expect(data.meta).to.be();
                  }
                }
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('listDashboards', function() {
        it('should call listDashboards successfully', function(done) {
          // TODO: uncomment, update parameter values for listDashboards call and complete the assertions
          /*
          var owner = "owner_example";
          var opts = {};
          opts.offset = 56;
          opts.limit = 56;
          opts.sort = "sort_example";
          opts.query = "query_example";

          instance.listDashboards(owner, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1ListDashboardsResponse);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1Dashboard);
                expect(data.uuid).to.be.a('string');
                expect(data.uuid).to.be("");
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.description).to.be.a('string');
                expect(data.description).to.be("");
                {
                  let dataCtr = data.tags;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.disabled).to.be.a('boolean');
                expect(data.disabled).to.be(false);
                expect(data.deleted).to.be.a('boolean');
                expect(data.deleted).to.be(false);
                {
                  let dataCtr = data.widgets;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(PolyaxonSdk.V1WidgetSpec);
                    expect(data.kind).to.be.a('string');
                    expect(data.kind).to.be("");
                    expect(data.search).to.be.a(PolyaxonSdk.V1SearchSpec);
                          expect(data.search.query).to.be.a('string');
                      expect(data.search.query).to.be("");
                      expect(data.search.sort).to.be.a('string');
                      expect(data.search.sort).to.be("");
                      expect(data.search.limit).to.be.a('number');
                      expect(data.search.limit).to.be(0);
                      expect(data.search.groupby).to.be.a('string');
                      expect(data.search.groupby).to.be("");
                      expect(data.search.columns).to.be.a('string');
                      expect(data.search.columns).to.be("");
                    expect(data.meta).to.be.a(Object);
                    expect(data.meta).to.be();
                  }
                }
                expect(data.created_at).to.be.a(Date);
                expect(data.created_at).to.be(new Date());
                expect(data.updated_at).to.be.a(Date);
                expect(data.updated_at).to.be(new Date());
              }
            }
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('patchDashboard', function() {
        it('should call patchDashboard successfully', function(done) {
          // TODO: uncomment, update parameter values for patchDashboard call and complete the assertions
          /*
          var owner = "owner_example";
          var dashboard_uuid = "dashboard_uuid_example";
          var body = new PolyaxonSdk.V1Dashboard();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.widgets = [new PolyaxonSdk.V1WidgetSpec()];
          body.widgets[0].kind = "";
          body.widgets[0].search = new PolyaxonSdk.V1SearchSpec();
          body.widgets[0].search.query = "";
          body.widgets[0].search.sort = "";
          body.widgets[0].search.limit = 0;
          body.widgets[0].search.groupby = "";
          body.widgets[0].search.columns = "";
          body.widgets[0].meta = ;
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.patchDashboard(owner, dashboard_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Dashboard);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            {
              let dataCtr = data.widgets;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1WidgetSpec);
                expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("");
                expect(data.search).to.be.a(PolyaxonSdk.V1SearchSpec);
                      expect(data.search.query).to.be.a('string');
                  expect(data.search.query).to.be("");
                  expect(data.search.sort).to.be.a('string');
                  expect(data.search.sort).to.be("");
                  expect(data.search.limit).to.be.a('number');
                  expect(data.search.limit).to.be(0);
                  expect(data.search.groupby).to.be.a('string');
                  expect(data.search.groupby).to.be("");
                  expect(data.search.columns).to.be.a('string');
                  expect(data.search.columns).to.be("");
                expect(data.meta).to.be.a(Object);
                expect(data.meta).to.be();
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateDashboard', function() {
        it('should call updateDashboard successfully', function(done) {
          // TODO: uncomment, update parameter values for updateDashboard call and complete the assertions
          /*
          var owner = "owner_example";
          var dashboard_uuid = "dashboard_uuid_example";
          var body = new PolyaxonSdk.V1Dashboard();
          body.uuid = "";
          body.name = "";
          body.description = "";
          body.tags = [""];
          body.disabled = false;
          body.deleted = false;
          body.widgets = [new PolyaxonSdk.V1WidgetSpec()];
          body.widgets[0].kind = "";
          body.widgets[0].search = new PolyaxonSdk.V1SearchSpec();
          body.widgets[0].search.query = "";
          body.widgets[0].search.sort = "";
          body.widgets[0].search.limit = 0;
          body.widgets[0].search.groupby = "";
          body.widgets[0].search.columns = "";
          body.widgets[0].meta = ;
          body.created_at = new Date();
          body.updated_at = new Date();

          instance.updateDashboard(owner, dashboard_uuid, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PolyaxonSdk.V1Dashboard);
            expect(data.uuid).to.be.a('string');
            expect(data.uuid).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            {
              let dataCtr = data.tags;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.disabled).to.be.a('boolean');
            expect(data.disabled).to.be(false);
            expect(data.deleted).to.be.a('boolean');
            expect(data.deleted).to.be(false);
            {
              let dataCtr = data.widgets;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PolyaxonSdk.V1WidgetSpec);
                expect(data.kind).to.be.a('string');
                expect(data.kind).to.be("");
                expect(data.search).to.be.a(PolyaxonSdk.V1SearchSpec);
                      expect(data.search.query).to.be.a('string');
                  expect(data.search.query).to.be("");
                  expect(data.search.sort).to.be.a('string');
                  expect(data.search.sort).to.be("");
                  expect(data.search.limit).to.be.a('number');
                  expect(data.search.limit).to.be(0);
                  expect(data.search.groupby).to.be.a('string');
                  expect(data.search.groupby).to.be("");
                  expect(data.search.columns).to.be.a('string');
                  expect(data.search.columns).to.be("");
                expect(data.meta).to.be.a(Object);
                expect(data.meta).to.be();
              }
            }
            expect(data.created_at).to.be.a(Date);
            expect(data.created_at).to.be(new Date());
            expect(data.updated_at).to.be.a(Date);
            expect(data.updated_at).to.be(new Date());

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
