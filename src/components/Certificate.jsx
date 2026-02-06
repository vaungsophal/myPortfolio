import React, { useState } from "react"
import { Modal, IconButton, Box, Fade, Backdrop, Zoom, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf"

const Certificate = ({ ImgSertif, Title }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Box component="div" sx={{ width: "100%" }}>
			{/* Thumbnail Container */}
			<Box
				className=""
				sx={{
					position: "relative",
					overflow: "hidden",
					borderRadius: 1,
					boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
					transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
					"&:hover": {
						transform: "translateY(-5px)",
						boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
						"& .overlay": {
							opacity: 1,
						},
						"& .hover-content": {
							transform: "translate(-50%, -50%)",
							opacity: 1,
						},
						"& .certificate-image": {
							filter: "none",
						},
					},
				}}>
				{/* Certificate Image with Initial Filter */}
				<Box
					sx={{
						position: "relative",
						"&::before": {
							content: '""',
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(0, 0, 0, 0.1)",
							zIndex: 1,
						},
					}}>
					{ImgSertif.endsWith('.pdf') ? (
						<Box
							className="certificate-image"
							onClick={handleOpen}
							sx={{
								width: "100%",
								aspectRatio: "4/3",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								bgcolor: "rgba(255, 255, 255, 0.05)",
								cursor: "pointer",
								borderRadius: 1,
								border: "1px solid rgba(255, 255, 255, 0.1)",
							}}
						>
							<PictureAsPdfIcon sx={{ fontSize: 60, color: "#e53e3e", mb: 2 }} />
							<Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.8)", fontWeight: 500 }}>
								View PDF
							</Typography>
						</Box>
					) : (
						<img
							className="certificate-image"
							src={ImgSertif}
							alt="Certificate"
							style={{
								width: "100%",
								aspectRatio: "4/3",
								display: "block",
								objectFit: "cover",
								filter: "none",
								transition: "all 0.3s ease",
							}}
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = "https://via.placeholder.com/600x450?text=Certificate+Image";
							}}
							onClick={handleOpen}
						/>
					)}
				</Box>

				{/* Hover Overlay */}
				<Box
					className="overlay"
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(59, 130, 246, 0.1)",
						backdropFilter: "blur(2px)",
						opacity: 0,
						transition: "all 0.3s ease",
						cursor: "pointer",
						zIndex: 2,
					}}
					onClick={handleOpen}>
					{/* Hover Content */}
					<Box
						className="hover-content"
						sx={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -60%)",
							opacity: 0,
							transition: "all 0.4s ease",
							textAlign: "center",
							width: "100%",
							color: "white",
						}}>
						<FullscreenIcon
							sx={{
								fontSize: 40,
								mb: 1,
								color: "#3b82f6",
								filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
							}}
						/>
						<Typography
							variant="h6"
							sx={{
								color: "#3b82f6",
								fontWeight: 600,
								textShadow: "0 2px 4px rgba(0,0,0,0.5)",
								letterSpacing: "2px",
								textTransform: "uppercase"
							}}>
							View Certificate
						</Typography>
					</Box>
				</Box>
			</Box>
			{/* Certificate Title Below Card */}
			{Title && (
				<Box sx={{ mt: 2, textAlign: "center" }}>
					<Typography
						variant="body2"
						sx={{
							color: "white",
							fontWeight: 600,
							fontSize: "0.8rem",
							textTransform: "uppercase",
							letterSpacing: "1px",
							opacity: 0.8
						}}
					>
						{Title}
					</Typography>
				</Box>
			)}

			{/* Modal */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						backdropFilter: "blur(5px)",
					},
				}}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: 0,
					padding: 0,
					"& .MuiBackdrop-root": {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
					},
				}}>
				<Box
					sx={{
						position: "relative",
						width: "auto",
						maxWidth: "90vw",
						maxHeight: "90vh",
						m: 0,
						p: 0,
						outline: "none",
						"&:focus": {
							outline: "none",
						},
					}}>
					{/* Close Button */}
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 16,
							top: 16,
							color: "white",
							bgcolor: "rgba(0,0,0,0.6)",
							zIndex: 1,
							padding: 1,
							"&:hover": {
								bgcolor: "rgba(0,0,0,0.8)",
								transform: "scale(1.1)",
							},
						}}
						size="large">
						<CloseIcon sx={{ fontSize: 24 }} />
					</IconButton>

					{/* Modal Content */}
					{ImgSertif.endsWith('.pdf') ? (
						<iframe
							src={ImgSertif}
							title="Certificate PDF"
							style={{
								width: "80vw",
								height: "80vh",
								border: "none",
								backgroundColor: "white",
								borderRadius: "8px",
							}}
						/>
					) : (
						<img
							src={ImgSertif}
							alt="Certificate Full View"
							style={{
								display: "block",
								maxWidth: "100%",
								maxHeight: "90vh",
								margin: "0 auto",
								objectFit: "contain",
							}}
						/>
					)}
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate
