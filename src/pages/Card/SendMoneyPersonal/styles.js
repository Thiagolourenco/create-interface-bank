import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // flex: 1,
    backgroundColor: colors.dark,
    height: "100%",
    width: "100%",
  },
  headerTitle: {
    fontSize: 27,
    color: colors.white,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 10,
  },
  btnGoBack: {
    marginTop: 20,
    marginLeft: 20,
  },
  headerSubTitle: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
  viewContent: {
    backgroundColor: colors.gray,
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  viewContentTitle: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
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
  viewSelectAccount: {
    backgroundColor: "#fff",
    flex: 10,
  },
  btnSelectCard: {
    backgroundColor: "#F1F3F6",
    height: 80,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#ccc",
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowOpacity: 4,
    shadowRadius: 5,
    elevation: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  viewImageVisa: {
    height: 40,
    width: 40,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgCard: {
    height: 30,
    width: 30,
  },
  viewRow: {
    flexDirection: "row",
  },
  viewCardDataText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.dark,
  },
  textNumberCard: {
    fontSize: 12,
    color: "#8E93A0",
    marginTop: 5,
    fontWeight: "700",
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
  }
});

export default styles;
