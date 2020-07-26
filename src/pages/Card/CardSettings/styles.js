import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    // flex: 1,
    backgroundColor: colors.dark,
    height: "100%",
    width: "100%",
  },
  viewHeaderTitle: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 27,
    color: colors.white,
    fontWeight: "700",
    marginLeft: 10,
  },
  viewInfoNotUser: {
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
    transform: [{ rotate: "15deg" }],
  },
  imageView: {
    height: 30,
    width: 30,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  textSubtitleHeader: {
    fontSize: 11,
    color: "rgba(255,255,255,0.5)",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
  viewAppFunctions: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-evenly",
  },
  viewCardIcon: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  viewIcon: {
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: colors.white,
    // marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  viewCardIconText: {
    color: "rgba(255,255,255,0.5)",
    fontWeight: "bold",
    // marginLeft: 25,
    fontSize: 11,
    marginTop: 10,
  },
  viewScroll: {
    backgroundColor: colors.gray,
    // flex: 2,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  viewCardHeaderT: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  viewCardHeaderTitle: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: "bold",
  },
  viewCardHeaderButton: {
    fontSize: 14,
    color: colors.blue,
    fontWeight: "700",
  },
  viewScrollView: {
    marginTop: 20,
  },
  viewCard: {
    height: 170,
    width: 290,
    backgroundColor: colors.dark,
    // alignSelf: "center",
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-evenly",
  },

  viewBollon: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  cardSettings: {
    // flex: 1,
    marginTop: 15,
    // marginLeft: 20,
  },
  cardSettingsTitle: {
    fontSize: 22,
    color: colors.dark,
    fontWeight: "bold",
    marginLeft: 20,
  },
  cardSettingsView: {
    height: 70,
    width: "90%",
    flexDirection: "row",
    // width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "rgba(255,255,255,0.5)",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    paddingLeft: 10,
  },
  cardSettingsViewText: {
    fontSize: 18,
    marginLeft: 10,
    color: colors.dark,
    fontWeight: "600",
  },
  contentCard: { flexDirection: "row" },
  viewCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    marginTop: 20,
  },
  viewCardValue: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  viewCardType: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "800",
  },
  viewCardNumber: {
    flexDirection: "row",
    marginLeft: 10,
  },
  viewCardNumberText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    marginLeft: 10,
  },
  viewCardFooter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewCardFooterName: {},
  viewCardFooterNameText: {
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
    fontWeight: "bold",
  },
  viewCardFooterNameTextValue: {
    fontSize: 10,
    color: colors.white,
    fontWeight: "bold",
  },
  viewCardFooterNameUser: {
    marginRight: 40,
  },
  viewBollon: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
    position: "absolute",
    top: 230,
  },
  viewCardHeaderTrans: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    marginTop: 50,
  },
  viewCardTransactions: {
    height: 150,
    width: 320,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    alignSelf: "center",
    shadowColor: "#ccc",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 2,
    elevation: 0.2,
  },
  viewTypeImageCard: {
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  viewCardTransactionsContent: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 10,
    justifyContent: "space-between",
    marginRight: 10,
  },
  viewCardTransactionsContentBody: {
    flexDirection: "row",
    marginTop: 5,
  },
  viewCardTransactionsDesc: { marginLeft: 10 },
  viewCardDataText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#222",
  },
  textNumberCardYear: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 5,
    fontWeight: "bold",
  },
  textNumberCardYearDate: {
    fontSize: 12,
    color: "#ccc",
    marginTop: 5,
    fontWeight: "bold",
    marginLeft: 15,
  },
  viewLineTransactions: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "50%",
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "flex-end",
  },
  btnGoBack: {
    marginTop: 20,
    marginLeft: 20,
  },
});

export default styles;