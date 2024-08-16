sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */
    function (Controller, MessageToast, Filter,FilterOperator) {
        "use strict";

        return Controller.extend("sap.ui.comp.sample.filterbar.DynamicPageListReport.DynamicPageListReport",{
            onInit: function () {
                //this.onReadFilters();
            },

            onReadFilters: function () {
                this.oValidacionEstatus;
                var estatusinput = this.getView().byId("inestatus").getSelectedItem().getText();
                var that = this;
                var oModel = this.getOwnerComponent().getModel();

                //Conversion de texto ITEM
                if(estatusinput == "Nuevas Citas"){
                    estatusinput = "N";
                } else if (estatusinput == "En Proceso"){
                    estatusinput = "P";
                } else if (estatusinput == "Concluida"){
                    estatusinput = "T";
                } else if (estatusinput == "Cancelada"){
                    estatusinput = "C";
                }
                //Fin conversion 

                var oFilter = new Filter("Estatus", FilterOperator.EQ , estatusinput);
                oModel.read("/get_citasSet", {
                    filters: [oFilter], success: function (odata) {
                        console.log(odata);
                        var jModel = new sap.ui.model.json.JSONModel(odata);
                        that.getView().byId("cambaceo").setModel(jModel);
                    },
                    error: function (oError) {
                        console.log(oError);
                    }
                })
            }
        });
    });
