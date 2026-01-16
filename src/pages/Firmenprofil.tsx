import React from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Save } from 'lucide-react';
import { useUserStore } from '../stores/userStore';
import { Button } from '../components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

const firmenprofilSchema = z.object({
    firmenname: z.string().min(2, 'Firmenname muss mindestens 2 Zeichen haben'),
    branche: z.string().optional(),
    strasse: z.string().optional(),
    plz: z.string().regex(/^\d{5}$/, 'PLZ muss 5 Ziffern haben').or(z.literal('')),
    stadt: z.string().optional(),
    telefon: z.string().optional(),
    email: z.string().email('Ungültige E-Mail-Adresse').or(z.literal('')),
    website: z.string().url('Ungültige URL (https://...)').or(z.literal('')),
    beschreibung: z.string().max(500, 'Maximal 500 Zeichen').optional(),
});

type FirmenprofilFormData = z.infer<typeof firmenprofilSchema>;

const Firmenprofil: React.FC = () => {
    const { user } = useUserStore();

    const form = useForm<FirmenprofilFormData>({
        resolver: zodResolver(firmenprofilSchema),
        defaultValues: {
            firmenname: '',
            branche: '',
            strasse: '',
            plz: '',
            stadt: '',
            telefon: '',
            email: user?.email || '',
            website: '',
            beschreibung: '',
        },
    });

    const onSubmit = (data: FirmenprofilFormData) => {
        console.log('Form data:', data);
        alert('Profil gespeichert! (Demo)');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#feefbc] to-[#faf8f3]">
            <div className="max-w-lg mx-auto px-6 pt-24 pb-16">
                <Link to="/dashboard" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-excon text-[13px]">
                    <ArrowLeft size={14} />
                    Dashboard
                </Link>
                <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100">
                    <h1 className="font-renade text-[20px] text-gray-900 mb-1">Firmenprofil</h1>
                    <p className="font-excon text-[12px] text-gray-500 mb-8">Bearbeiten Sie Ihren Eintrag</p>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[20px]">
                            <FormField control={form.control} name="firmenname" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-excon text-[11px] text-gray-500">Firmenname *</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Muster GmbH" className="rounded-xl px-[16px] py-[12px] h-auto font-excon text-[14px]" />
                                    </FormControl>
                                    <FormMessage className="font-excon text-[11px]" />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="branche" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-excon text-[11px] text-gray-500">Branche</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="rounded-xl px-[16px] py-[12px] h-auto font-excon text-[14px]">
                                                <SelectValue placeholder="Bitte wählen" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="restaurant">Restaurant</SelectItem>
                                            <SelectItem value="arzt">Arzt</SelectItem>
                                            <SelectItem value="handwerker">Handwerker</SelectItem>
                                            <SelectItem value="friseur">Friseur</SelectItem>
                                            <SelectItem value="rechtsanwalt">Rechtsanwalt</SelectItem>
                                            <SelectItem value="sonstiges">Sonstiges</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="font-excon text-[11px]" />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="strasse" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-excon text-[11px] text-gray-500">Straße</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="Musterstraße 123" className="rounded-xl px-[16px] py-[12px] h-auto font-excon text-[14px]" />
                                    </FormControl>
                                    <FormMessage className="font-excon text-[11px]" />
                                </FormItem>
                            )} />
                            <div className="grid grid-cols-2 gap-[16px]">
                                <FormField control={form.control} name="plz" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-excon text-[11px] text-gray-500">PLZ</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="10245" className="rounded-xl px-[16px] py-[12px] h-auto font-excon text-[14px]" />
                                        </FormControl>
                                        <FormMessage className="font-excon text-[11px]" />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="stadt" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-excon text-[11px] text-gray-500">Stadt</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Berlin" className="rounded-xl px-[16px] py-[12px] h-auto font-excon text-[14px]" />
                                        </FormControl>
                                        <FormMessage className="font-excon text-[11px]" />
                                    </FormItem>
                                )} />
                            </div>
                            <FormField control={form.control} name="telefon" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-excon text-[11px] text-gray-500">Telefon</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="+49 30 123456" className="rounded-xl px-[16px] py-[12px] h-auto font-excon text-[14px]" />
                                    </FormControl>
                                    <FormMessage className="font-excon text-[11px]" />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-excon text-[11px] text-gray-500">E-Mail</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" placeholder="info@firma.de" className="rounded-xl px-[16px] py-[12px] h-auto font-excon text-[14px]" />
                                    </FormControl>
                                    <FormMessage className="font-excon text-[11px]" />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="website" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-excon text-[11px] text-gray-500">Website</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="https://www.firma.de" className="rounded-xl px-[16px] py-[12px] h-auto font-excon text-[14px]" />
                                    </FormControl>
                                    <FormMessage className="font-excon text-[11px]" />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="beschreibung" render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-excon text-[11px] text-gray-500">Beschreibung</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} rows={3} placeholder="Beschreiben Sie Ihr Unternehmen..." className="rounded-xl px-[16px] py-[12px] font-excon text-[14px] resize-none" />
                                    </FormControl>
                                    <FormMessage className="font-excon text-[11px]" />
                                </FormItem>
                            )} />
                            <Button type="submit" disabled={form.formState.isSubmitting} className="w-full h-[44px] rounded-xl bg-[#feefbc] hover:bg-[#f5e4a8] text-gray-900 font-excon font-semibold text-[13px] flex items-center justify-center gap-[8px] mt-[8px] disabled:opacity-50">
                                <Save size={14} />
                                {form.formState.isSubmitting ? 'Speichern...' : 'Speichern'}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Firmenprofil;
