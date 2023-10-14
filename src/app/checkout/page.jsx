import "./checkout.css"
import process from "@/components/checkout/process"
import generateOrderId from "@/components/generate-order-id"
import GetPaket from "@/components/checkout/get-paket"
import CardDetail from "@/components/checkout/card-detail"
import CardCourse from "@/components/checkout/card-course"
import GetPaketDisplay from "@/components/checkout/get-paket-display"

export default async function Checkout() {
	return (
		<main id="checkout">
			<div className="container pt-4 pb-5">
				<div className="row">
					<div className="col-lg-6">
						<h2>Laporan Terakhir Dapatkan Pembelajaran Impian Anda</h2>
					</div>
					<div className="col-lg-6"></div>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<CardCourse />
					</div>
					<div className="col-lg-6">
						<div className="card">
							<CardDetail />
							<div className="card-footer">
								{/* <button
									onClick={() => {
										let orderId = generateOrderId()
										let totalPrice = price[paket] - random - discount
										process(orderId, totalPrice)
									}}
									className="btn btn-primary w-100">
									Bayar & Gabung Kelas Sekarang
								</button> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
