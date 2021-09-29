export default function LiveChatModal() {
  return (
    <div
      className="modal fade"
      id="livechatmodal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="livechatmodal"
      aria-hidden="true"
    >
      <div className="modal-backdrop fade in" style={{ height: "756px" }}></div>
      <div
        className="modal-dialog modal-lg"
        style={{ top: "10%", zIndex: "1041" }}
      >
        <div className="modal-content">
          <div
            className="modal-header"
            style={{ backgroundColor: "#01A3A3", color: "#FFF" }}
          >
            <div className="modal-title text-center font-size-18">
              Need quick help? Chat with our Counselor
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div id="remove_me_after_load">
              Refresh the page if not loaded properly....
            </div>
            <div id="lhc_status_container_page"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
