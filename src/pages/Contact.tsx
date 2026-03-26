import { motion } from "framer-motion";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Vyplňte prosím všechna povinná pole.");
      return;
    }
    setSending(true);
try {
  const response = await fetch("https://formsubmit.co/ajax/smolka.ondra@gmail.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      _subject: "Nová zpráva z ondrejsmolka.cz",
      _captcha: "false"
    })
  });
  if (response.ok) {
    toast.success("Zpráva byla odeslána. Ozvu se vám co nejdříve.");
    setForm({ name: "", email: "", phone: "", message: "" });
  } else {
    toast.error("Něco se pokazilo. Zkuste to prosím znovu.");
  }
} catch {
  toast.error("Chyba připojení. Zkuste to prosím znovu.");
} finally {
  setSending(false);
}
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Kontakt</p>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
              Domluvme se na konzultaci
            </h1>
            <p className="text-base text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              První konzultace je zdarma. Popište mi svou situaci a ozvu se vám do 24 hodin.
            </p>

            <div className="section-divider mb-12" />

            <div className="grid md:grid-cols-3 gap-16">
              <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      Jméno *
                    </label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Vaše jméno"
                      className="border-foreground/20 bg-transparent focus-visible:ring-foreground/30"
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="vas@email.cz"
                      className="border-foreground/20 bg-transparent focus-visible:ring-foreground/30"
                      maxLength={255}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                    Telefon
                  </label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+420 ..."
                    className="border-foreground/20 bg-transparent focus-visible:ring-foreground/30"
                    maxLength={20}
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                    Zpráva *
                  </label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Popište prosím svou situaci..."
                    rows={6}
                    className="border-foreground/20 bg-transparent focus-visible:ring-foreground/30 resize-none"
                    maxLength={2000}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="bg-foreground text-background px-10 py-4 h-auto text-sm font-medium tracking-widest uppercase hover:opacity-80 transition-opacity rounded-none"
                >
                  {sending ? "Odesílám..." : "Odeslat zprávu"}
                </Button>
              </form>

              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Telefon</p>
                  <a href="tel:+420739470486" className="text-base font-medium hover:opacity-70 transition-opacity">
                    +420 739 470 486
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</p>
                  <a href="mailto:smolka.ondra@gmail.com" className="text-base font-medium hover:opacity-70 transition-opacity">
                    smolka.ondra@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Web</p>
                  <a href="https://ondrejsmolka.cz" className="text-base font-medium hover:opacity-70 transition-opacity">
                    ondrejsmolka.cz
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Lokace</p>
                  <p className="text-base font-medium">Ostrava, Česká republika</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Contact;
