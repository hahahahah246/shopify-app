import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Payment() {
  return (
    <Card className="w-full max-w-2xl justify-center items-center">
      <CardHeader>
        <CardTitle>Payment</CardTitle>
        <CardDescription>Enter your payment details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="0000 0000 0000 0000" type="text" pattern="d*" maxLength={16} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expirationDate">Expiration Date</Label>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger id="expirationMonth">
                  <SelectValue placeholder="MM" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <SelectItem key={month} value={month.toString().padStart(2, "0")}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger id="expirationYear">
                  <SelectValue placeholder="YYYY" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input id="cvv" placeholder="123" type="text" pattern="d*" maxLength={3} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="billingAddress">Billing Address</Label>
          <Textarea id="billingAddress" placeholder="Enter your billing address" />
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="ml-auto">
          Pay Now
        </Button>
      </CardFooter>
    </Card>
  )
}