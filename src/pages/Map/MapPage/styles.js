import { StyleSheet, Dimensions } from "react-native";

import { colors } from "../../../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    width: width,
    height: height,
  },
  makerCustomView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: colors.gray,
    borderColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  makerCustomImage: {
    height: 35,
    width: 35,
    borderRadius: 20,
  },
  titleMap: {
    position: "absolute",
    fontSize: 18,
    color: "#2C314B",
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    top: 480,
    left: 5,
  },
  viewContentAtm: {
    height: 120,
    width: "100%",
    backgroundColor: colors.white,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  viewContentAtmText: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: "bold",
  },
  viewContentAtmDesc: {
    fontSize: 12,
    fontWeight: "700",
    color: "#878B99",
  },
  viewColumn: {
    marginLeft: 20,
  },
  viewImageContent: {
    height: 80,
    width: 200,
    borderRadius: 10,
    backgroundColor: "rgba(235,237,242,0.2)",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    marginLeft: 20,
    marginTop: 10,
    justifyContent: "center",
  },
  makerCustomViewType: {
    height: 15,
    width: 15,
    borderRadius: 20,
    borderWidth: 3,
    backgroundColor: colors.blue,
    borderColor: "rgba(37,115,213,0.2)",
    // justifyContent: "center",
    // alignItems: "center",
  },
  viewModal: {
    height: 350,
    backgroundColor: colors.gray,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  viewLine: {
    width: 50,
    borderBottomWidth: 4,
    borderBottomColor: "#212121",
    marginTop: 5,
    alignSelf: "center",
  },
  viewModalTitle: {
    fontSize: 18,
    color: "#2C314B",
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  slider: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    color: colors.blue,
    marginTop: 20,
    shadowColor: "#ccc",
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 2,
  },
  btnValoresView: {
    marginLeft: 10,
    // flexDirection: "row",
  },
  btnValor: {
    height: 40,
    width: 70,
    backgroundColor: "#EBEDF2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  btnValorText: {
    color: "#878B99",
    fontSize: 14,
    fontWeight: "700",
  },
  viewValueAmount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 25,
  },
  viewValueBtn: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: "#E6E8ED",
    justifyContent: "center",
    alignItems: "center",
  },
  textValue: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#4073cc",
  },
  btnCancel: {
    height: 55,
    width: 150,
    backgroundColor: "#F7F9Fc",
    opacity: 0.5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#ccc",
    shadowOffset: {
      height: 2,
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  btnSend: {
    height: 55,
    width: 150,
    backgroundColor: colors.blue,
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  groupBtn: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
    bottom: 10,
  },
});

export default styles;