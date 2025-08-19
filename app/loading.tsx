export default function Loading() {
    return (
        <>
            {/* Preloader Start */}
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading" />
                    <div id="loading-icon">
                        <img src="/assets/img/logo/qollixLogo (148 x 40 px).svg" alt="Qollix Logo" />
                    </div>
                </div>
            </div>
            {/* Preloader End */}
        </>
    );
}
