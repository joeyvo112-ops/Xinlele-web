import { X, Minus, Plus, ShoppingBag, ArrowRight, CheckCircle2 } from "lucide-react";
import { CartItem } from "../types";
import React, { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerPhone || !buyerAddress) return;
    setIsCheckingOut(true);
    // Simulate API delay for retail order booking
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      onClearCart();
    }, 1500);
  };

  const formattedPrice = (price: number) => {
    return price.toLocaleString("vi-VN") + " đ";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="cart-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-xs"
          />

          {/* Drawer panel */}
          <motion.div
            id="cart-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white border-l border-border-earth/20 shadow-2xl z-55 flex flex-col h-full overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-border-earth/15 bg-surface-cream/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-display font-bold text-lg text-earth-dark">Giỏ hàng của bạn</h2>
                <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {cart.reduce((sum, i) => sum + i.quantity, 0)}
                </span>
              </div>
              <button
                id="close-cart-btn"
                onClick={onClose}
                className="p-1 rounded-full hover:bg-earth-dark/5 transition-colors text-earth-muted"
                aria-label="Close cart"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {checkoutComplete ? (
                <div className="flex flex-col items-center justify-center text-center h-full space-y-4 py-8">
                  <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <CheckCircle2 className="h-10 w-10 stroke-[2.5]" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary">Đơn hàng thành công!</h3>
                  <p className="text-earth-muted text-sm max-w-xs">
                    Cảm ơn bạn đã lựa chọn Xinlele. Đội ngũ chăm sóc khách hàng của chúng tôi sẽ gọi điện xác nhận trong 15 phút tới.
                  </p>
                  <button
                    id="finish-order-btn"
                    onClick={() => {
                      setCheckoutComplete(false);
                      onClose();
                    }}
                    className="w-full max-w-xs bg-primary hover:bg-primary-light text-white font-medium py-3 rounded-lg shadow-md transition-all mt-4"
                  >
                    Tiếp tục mua sắm
                  </button>
                </div>
              ) : cart.length === 0 && !isCheckingOut ? (
                <div className="flex flex-col items-center justify-center text-center h-64 space-y-3">
                  <ShoppingBag className="h-12 w-12 text-earth-muted/40" />
                  <p className="font-display font-semibold text-earth-muted">Giỏ hàng của bạn đang trống</p>
                  <p className="text-xs text-earth-muted/70 max-w-[240px]">
                    Hãy dạo quanh cửa hàng và chọn cho mình các sản phẩm nông sản giòn bùi nhất nhé!
                  </p>
                  <button
                    id="shop-now-btn"
                    onClick={onClose}
                    className="text-primary hover:text-primary-light font-bold text-sm flex items-center gap-1 mt-2"
                  >
                    Mua sắm ngay <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : !isCheckingOut ? (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex pb-4 border-b border-border-earth/10 gap-4 items-start"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 object-cover rounded-md border border-border-earth/10 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-sm text-earth-dark truncate">
                        {item.product.name}
                      </h4>
                      {item.product.volumeUnits && (
                        <p className="text-xs text-earth-muted mb-2">{item.product.volumeUnits}</p>
                      )}
                      <p className="font-bold text-primary text-sm font-display">
                        {formattedPrice(item.product.price)}
                      </p>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-border-earth/30 rounded-md bg-stone-50 overflow-hidden">
                          <button
                            id={`minus-qty-${item.product.id}`}
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 hover:bg-stone-200 transition-colors"
                          >
                            <Minus className="h-3 w-3 text-earth-muted" />
                          </button>
                          <span className="px-3 text-xs font-semibold text-earth-dark text-center min-w-[24px]">
                            {item.quantity}
                          </span>
                          <button
                            id={`plus-qty-${item.product.id}`}
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 hover:bg-stone-200 transition-colors"
                          >
                            <Plus className="h-3 w-3 text-earth-muted" />
                          </button>
                        </div>
                        <button
                          id={`remove-item-${item.product.id}`}
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-xs hover:underline text-secondary transition-colors"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                /* Checkout Form panel */
                <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4 pt-2">
                  <h3 className="font-display font-extrabold text-earth-dark text-md border-b pb-2 mb-4">
                    Thông tin thanh toán nhận hàng
                  </h3>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-earth-dark">Họ và tên khách hàng *</label>
                    <input
                      id="checkout-name"
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full border border-border-earth/30 rounded-md p-2.5 bg-stone-50 focus:outline-hidden focus:ring-1 focus:ring-primary text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-earth-dark">Số điện thoại liên hệ *</label>
                    <input
                      id="checkout-phone"
                      type="tel"
                      required
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      placeholder="091 xxxxxxx"
                      className="w-full border border-border-earth/30 rounded-md p-2.5 bg-stone-50 focus:outline-hidden focus:ring-1 focus:ring-primary text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-earth-dark">Địa chỉ giao nhận *</label>
                    <textarea
                      id="checkout-address"
                      required
                      rows={3}
                      value={buyerAddress}
                      onChange={(e) => setBuyerAddress(e.target.value)}
                      placeholder="Số nhà, Tên đường, Quận/Huyện, Tỉnh thành..."
                      className="w-full border border-border-earth/30 rounded-md p-2.5 bg-stone-50 focus:outline-hidden focus:ring-1 focus:ring-primary text-sm resize-none"
                    />
                  </div>
                  
                  <div className="bg-surface-cream rounded-lg p-4 mt-6 border border-border-earth/20 text-xs space-y-1">
                    <div className="flex justify-between font-medium">
                      <span>Tổng sản lượng mặt hàng:</span>
                      <span>{cart.reduce((s, i) => s + i.quantity, 0)} sản phẩm</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Phí giao hàng mẫu:</span>
                      <span className="text-stone-500 font-bold text-green-700">MIỄN PHÍ</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold border-t pt-2 mt-2 text-earth-dark">
                      <span>TỔNG KHẤU TRỪ:</span>
                      <span className="text-secondary">{formattedPrice(totalAmount)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <button
                      id="back-cart-btn"
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="flex-1 py-3 text-sm font-bold border border-border-earth/50 rounded-lg text-earth-dark hover:bg-stone-50 transition-colors"
                    >
                      Quay lại giỏ
                    </button>
                    <button
                      id="submit-order-btn"
                      type="submit"
                      className="flex-1 bg-secondary hover:bg-red-800 text-white font-bold py-3 text-sm rounded-lg shadow-md transition-all"
                    >
                      Xác nhận mua
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Bottom Actions */}
            {cart.length > 0 && !isCheckingOut && (
              <div className="p-6 border-t border-border-earth/15 bg-surface-cream/50 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-earth-muted">
                    <span>Số lượng:</span>
                    <span>{cart.reduce((sum, item) => sum + item.quantity, 0)} phần ăn</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-earth-dark">
                    <span>Tổng tiền thanh toán:</span>
                    <span className="text-secondary text-lg font-display">{formattedPrice(totalAmount)}</span>
                  </div>
                  <div className="p-2 border border-green-200 bg-green-50 rounded-md text-xs text-green-800 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    Đơn hàng đủ điều kiện nhận mã giảm giá 10% lần sau!
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    id="checkout-trigger-btn"
                    onClick={() => setIsCheckingOut(true)}
                    className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                  >
                    Tiến hành Thanh toán <ArrowRight className="h-5 w-5" />
                  </button>
                  <button
                    id="clear-cart-btn"
                    onClick={onClearCart}
                    className="text-xs text-center text-earth-muted hover:text-secondary hover:underline transition-colors py-1"
                  >
                    Làm trống giỏ hàng
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
